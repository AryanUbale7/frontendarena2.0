# Frontend Arena: Enterprise & White-Label Experience Spec

This document defines the complete product layout, information architecture, interface design, Single Sign-On (SSO) configurations, compliance dashboards, and multi-tenant scaling rules for the **Frontend Arena Enterprise & White-Label Ecosystem**.

---

## Global Enterprise Shell & Layout Architecture

To accommodate enterprise workflows, audit logs, and complex tenant structures, the Enterprise Console utilizes a full-screen, high-density dashboard shell.

```
+-------------------------------------------------------------+
| Ent: Vercel Org > Sandbox Envr    [Domain: Active]      [O] | Header Bar
+-------------------------------------------------------------+
| ( ) Multi-Tenant    |                                       |
| ( ) White-Label     |                                       |
| ( ) Administration  |             MAIN VIEWPORT             |
| ( ) Security & IAM  |             (Scrollable)              | Workspace
| ( ) Compliance      |                                       |
| ( ) Integrations    |                                       |
| ( ) Analytics       |                                       |
+---------------------+---------------------------------------+
  Sidebar (240px)
```

### 1. Global Navigation Sidebar
*   **Visual Style:** Width `240px` (collapsible to `64px`). Background `#0D0D0E`, border right `1px solid #161619`.
*   **Active Theme:** Accent highlight color is **Slate Gray / Cool Blue** (`#64748B`), representing enterprise governance, stability, and scale.
*   **Layout:**
    *   *Top Section:* Organization switcher and active tenant environment tag (Sandbox vs Production).
    *   *Middle Section:* Multi-Tenant Dashboard, White-Label settings, Enterprise Admin, Security & IAM, Compliance Dashboard, Integrations Marketplace, Enterprise Analytics.
    *   *Bottom Section:* Subscription, Billing, and System settings.

---

## 1. Multi-Tenant Experience

### 1. Purpose
Provides segregation between environments (Sandbox vs Production) and enables enterprise admins to manage multiple operational workspaces.

### 2. User Journey & UX Flow
1.  **Switch Tenant:** Admin clicks the organization selector in the top-left sidebar.
2.  **Display:** A dropdown list displays active tenants: *Vercel Inc. (Production)* and *Vercel Inc. (Staging / Sandbox)*.
3.  **Action:** Clicks "Staging Sandbox" to test challenge templates.

### 3. Layout & Section Hierarchy
*   **Tenant Settings Panel:** Displays tenant IDs, environment toggles, database locations, and usage statistics.

---

## 2. White-Label Management

### 1. Purpose
Enables enterprise clients to customize landing pages, logos, brand colors, custom domains, email templates, and certificates.

### 2. User Journey & UX Flow
1.  **Configure:** Navigates to "White-Label Settings".
2.  **Branding:** Uploads their brand SVG logo, selects color variables, and inputs their custom domain (`hackathon.vercel.com`).
3.  **Confirm:** Clicks "Apply Theme". The system dynamically compiles and applies the CSS variables to their tenant.

### 3. Layout & Section Hierarchy
*   **Branding Editor Canvas:** Split grid layout. Left: theme inputs. Right: interactive viewport previewing the customized landing page.

---

## 3. Enterprise Administration & 4. Organization Workspace

### 1. Purpose
Provides directories to manage corporate departments, business units, employee permissions, and active innovation programs.

### 2. Layout & Section Hierarchy
*   **Members Directory Table:** High-density data grid displaying member names, emails, department tags, active roles, and activity statuses.

---

## 5. Enterprise Security & 6. Identity & Access Management (IAM)

### 1. Purpose
Ensures security compliance through device/session controls, IP address restrictions, custom role permissions (RBAC), and threat alerts.

### 2. User Journey & UX Flow
1.  **Configure:** Security Admin enters the "Security Dashboard".
2.  **Restrict:** Toggles "IP Whitelisting" on and inputs corporate IP CIDR ranges.
3.  **Verify:** Reviews the platform's Security Scorecard (e.g., `94 / 100` in Space Grotesk).

### 3. Layout & Section Hierarchy
*   **Security Console:** Includes cards displaying Threat Alert timelines, active corporate sessions, and IP restriction lists.

### 4. Component Specification & Content

```
IP Restriction List
+--------------------------------------------------------------+
| Name / IP Range             | Scope          | Action        |
+-----------------------------+----------------+---------------+
| corporate_office (10.0.0.0) | Global Admin   | [ Remove ]    |
| staging_server (192.168.1.1)| Sandbox Only   | [ Remove ]    |
+-----------------------------+----------------+---------------+
```

*   **IP Input Field:** Text field validating CIDR blocks with action buttons.

---

## 7. Single Sign-On (SSO) Configurator

### 1. Purpose
Configure identity providers (Okta, Entra ID, OneLogin, Google Workspace) via SAML or OIDC pipelines.

### 2. User Journey & UX Flow
1.  **Configure:** Selects "Okta (SAML)".
2.  **Inputs:** Uploads Metadata XML file and inputs Single Sign-On URLs.
3.  **Validate:** Clicks "Test Connection" to run credentials verification.

### 3. Layout & Section Hierarchy
*   **Provider Configuration Form:** Field inputs, XML upload zones, and connection testers.

---

## 8. Compliance & Governance & 9. Audit & Risk Center

### 1. Purpose
Track platform activities, export audit logs, manage cookie policies, and review compliance scores (SOC2, ISO 27001, GDPR).

### 2. User Journey & UX Flow
1.  **Audit:** Legal officer audits logs.
2.  **Filter:** Narrows timeline to "Action: Role Change" to verify administrative elevations.

### 3. Layout & Section Hierarchy
*   **Audit Table:** Dense chronological grid listing user actions, timestamp parameters, IP details, and changed values.

---

## 10. Data Management

### 1. Purpose
Manage data exports, run backups, schedule database restorations, and handle GDPR deletion requests.

---

## 11. Integrations Marketplace

### 1. Purpose
Enables clients to connect developer workspaces with Slack, Teams, GitHub, GitLab, Jira, and configure webhooks.

### 2. User Journey & UX Flow
1.  **Connect:** Clicks "GitHub Integration".
2.  **Authorize:** Authenticates via GitHub OAuth to sync repository pipelines.

---

## 12. Enterprise Analytics, 13. Subscription, & 14. Localization Support

### 1. Purpose
Analyze regional registration funnels, track seat usage, and manage timezone/locale preferences.

### 2. Layout & Section Hierarchy
*   **Localization Panel:** Form setting configurations for local languages, regional currencies, date formats, and timezone defaults.

---

## Shared Security, Compliance, & Accessibility Specifications
*   **Data Segregation:** Tenant databases utilize separate schema mappings, preventing cross-tenant leakage.
*   **Contrast Standards:** Contrast ratios satisfy WCAG 2.1 AA parameters.
*   **Touch Targets:** Target buttons maintain a minimum bounding box of `44px x 44px`.
