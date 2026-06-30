"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./customer-login.module.css";

const LOGIN_ACTION = "https://mcburneycomms.com/web/sysloginpage";

export function CustomerLoginForm() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  return (
    <div className={styles.page}>
      <form
        name="thisForm"
        action={LOGIN_ACTION}
        method="post"
        className={styles.card}
        autoComplete="on"
      >
        <input type="hidden" name="V5SCREEN" value="ScrLogin" />
        <input type="hidden" name="V5SUPPLIER" value="" />
        <input type="hidden" name="V5RETAILER" value="" />
        <input type="hidden" name="V5BRAND" value="" />
        <input type="hidden" name="V5LASTBUTTON" value="" />
        <input type="hidden" name="V5VBUTTON" value="" />

        <div className={styles.keyline} />

        <div className={styles.head}>
          <h1 className={styles.wordmark}>
            McBurney <span>Transport Group</span>
          </h1>
          <p className={styles.eyebrow}>Customer Portal</p>
          <p className={styles.lede}>Secure access for McBurney users and clients.</p>
        </div>

        <div className={styles.body}>
          <div className={styles.field}>
            <label htmlFor="SCRUSERNAME">User ID</label>
            <div className={styles.inputWrap}>
              <input
                ref={usernameRef}
                id="SCRUSERNAME"
                type="text"
                name="SCRUSERNAME"
                autoComplete="username"
                autoCapitalize="none"
                spellCheck={false}
                placeholder="Your user ID"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="SCRUSERPASS">Password</label>
            <div className={styles.inputWrap}>
              <input
                id="SCRUSERPASS"
                type={showPassword ? "text" : "password"}
                name="SCRUSERPASS"
                autoComplete="current-password"
                placeholder="Your password"
              />
              <button
                type="button"
                className={styles.toggle}
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((current) => !current)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button type="submit" name="V5BUTTON" value="   OK   " className={styles.button}>
            Sign in
          </button>

          <p className={styles.note}>
            This facility is for the use of our users and clients only.
            <br />
            <br />
            <strong>Forgotten your password?</strong> Contact the IT department at
            our Liverpool offices.
          </p>

          <p className={styles.foot}>&copy; {new Date().getFullYear()} McBurney Transport Group</p>
        </div>
      </form>
    </div>
  );
}
