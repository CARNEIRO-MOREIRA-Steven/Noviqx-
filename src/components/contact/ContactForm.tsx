"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import {
  BUDGETS,
  EMPTY_VALUES,
  PROJECT_TYPES,
  isBudget,
  isProjectType,
  validateContact,
  type ContactErrors,
  type ContactField,
  type ContactValues,
} from "@/lib/contact";
import { buttonClasses, Arrow } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Field } from "./Field";
import styles from "./ContactForm.module.css";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const ERROR_MESSAGES: Record<string, string> = {
  rate_limited: "Trop de demandes envoyées depuis votre connexion. Réessayez dans quelques minutes.",
  not_configured: "L’envoi de messages n’est pas encore activé sur ce site. Votre demande n’a pas été transmise.",
  send_failed: "L’envoi a échoué de mon côté. Vos informations sont conservées : vous pouvez réessayer dans un instant.",
};

export function ContactForm() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();

  const [values, setValues] = useState<ContactValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  // Présélection depuis les boutons de la page (?type=vitrine&budget=1500-2500).
  const presetType = searchParams.get("type");
  const presetBudget = searchParams.get("budget");
  useEffect(() => {
    setValues((v) => ({
      ...v,
      ...(isProjectType(presetType) ? { type: presetType } : {}),
      ...(isBudget(presetBudget) ? { budget: presetBudget } : {}),
    }));
  }, [presetType, presetBudget]);

  const id = (name: string) => `${uid}-${name}`;

  /** Attributs communs d'un champ : liaison, accessibilité, validation à la sortie du champ. */
  const bind = (name: ContactField) => ({
    id: id(name),
    name,
    "aria-invalid": errors[name] ? (true as const) : undefined,
    "aria-describedby": errors[name] ? `${id(name)}-error` : undefined,
    // Validation à la sortie du champ, seulement s'il a été rempli ou s'il affichait déjà une erreur.
    onBlur: () => {
      const next = validateContact(values);
      if (values[name] || errors[name]) setErrors((prev) => ({ ...prev, [name]: next[name] }));
    },
  });

  const onText =
    (name: keyof ContactValues) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [name]: e.target.value }));

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.kind === "sending") return;

    const found = validateContact(values);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as ContactField[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      const body = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        errors?: ContactErrors;
      };

      if (response.ok && body.ok) {
        setValues(EMPTY_VALUES);
        setErrors({});
        setStatus({ kind: "success" });
        return;
      }
      if (body.errors) setErrors(body.errors);
      setStatus({
        kind: "error",
        message: ERROR_MESSAGES[body.error ?? ""] ?? "L’envoi a échoué. Vos informations sont conservées : réessayez dans un instant.",
      });
    } catch {
      setStatus({
        kind: "error",
        message: "Connexion impossible. Vérifiez votre réseau : vos informations sont conservées dans le formulaire.",
      });
    }
  }

  const sending = status.kind === "sending";

  return (
    <form ref={formRef} id="contact-form" className={styles.form} onSubmit={onSubmit} noValidate aria-describedby={id("intro")}>
      <Eyebrow>
        <span id={id("intro")}>Les champs marqués * sont obligatoires</span>
      </Eyebrow>

      <div className={styles.row}>
        <Field id={id("nom")} label="Nom et prénom *" error={errors.nom}>
          <input {...bind("nom")} type="text" autoComplete="name" required value={values.nom} onChange={onText("nom")} className={styles.control} />
        </Field>
        <Field id={id("email")} label="Adresse e-mail *" error={errors.email}>
          <input {...bind("email")} type="email" autoComplete="email" required value={values.email} onChange={onText("email")} className={styles.control} />
        </Field>
      </div>

      <Field id={id("entreprise")} label="Nom de l’entreprise" optional>
        <input id={id("entreprise")} name="entreprise" type="text" autoComplete="organization" value={values.entreprise} onChange={onText("entreprise")} className={styles.control} />
      </Field>

      <div className={styles.row}>
        <Field id={id("type")} label="Type de projet *" error={errors.type}>
          <select {...bind("type")} required value={values.type} onChange={onText("type")} className={styles.control}>
            <option value="">Choisir…</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </Field>
        <Field id={id("budget")} label="Budget estimé *" error={errors.budget}>
          <select {...bind("budget")} required value={values.budget} onChange={onText("budget")} className={styles.control}>
            <option value="">Choisir…</option>
            {BUDGETS.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id={id("message")} label="Description de votre besoin *" error={errors.message}>
        <textarea {...bind("message")} required rows={6} value={values.message} onChange={onText("message")} className={`${styles.control} ${styles.textarea}`} />
      </Field>

      {/* Champ piège anti-spam : invisible pour les visiteurs, rempli par les robots. */}
      <div className={styles.trap} aria-hidden="true">
        <label htmlFor={id("website")}>Ne pas remplir</label>
        <input id={id("website")} name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={onText("website")} />
      </div>

      <div className={styles.consentWrap}>
        <div className={styles.consent}>
          <input
            {...bind("consent")}
            type="checkbox"
            required
            checked={values.consent}
            onChange={(e) => setValues((v) => ({ ...v, consent: e.target.checked }))}
          />
          <label htmlFor={id("consent")}>
            J’accepte que NOVIQX utilise ces informations pour répondre à ma demande. Elles ne sont pas transmises à des
            tiers et sont conservées le temps nécessaire au traitement de ma demande.{" "}
            <Link href="/politique-de-confidentialite">Politique de confidentialité</Link> *
          </label>
        </div>
        <p id={`${id("consent")}-error`} className={styles.consentError} aria-live="polite">
          {errors.consent}
        </p>
      </div>

      <button type="submit" className={buttonClasses()} disabled={sending}>
        {sending ? "Envoi en cours…" : "Envoyer ma demande"}
        {!sending && <Arrow />}
      </button>

      {status.kind === "success" && (
        <p className={`${styles.status} ${styles.ok}`} role="status">
          Merci, votre demande est bien envoyée. Je vous réponds personnellement dès que possible.
        </p>
      )}
      {status.kind === "error" && (
        <p className={`${styles.status} ${styles.ko}`} role="alert">
          {status.message}
        </p>
      )}
    </form>
  );
}
