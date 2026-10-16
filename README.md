# Balaji Kumar — Portfolio

A responsive personal portfolio based on the supplied resume, with project details, skills, education, contact links, and a downloadable copy of the resume. Built with plain HTML, CSS, and JavaScript. All visual assets and fonts work locally.

## Open and preview in VS Code

1. Open **Balaji-Kumar-Portfolio.code-workspace** in VS Code using **File → Open Workspace from File…**.
2. Select **Terminal → New Terminal**.
3. Enter `npm start`.
4. Open **http://localhost:5500** in your browser.

The preview server requires Node.js 18 or later. There are no packages to install: **you do not need to run `npm install`**. If PowerShell blocks the `npm` command, run `node server.js` instead. Stop the preview with **Ctrl+C** in its terminal.

You can also choose **Terminal → Run Task… → Preview portfolio** in VS Code to start the same server.

**Without Node.js:** open `index.html` directly in a modern browser. The site works as local files; if copying the email address is blocked by browser permissions, select and copy the displayed address instead.

## Make it yours

| File | What to edit |
| --- | --- |
| `index.html` | Intro, project cards, skills, education, certifications, and contact links |
| `styles.css` | Colors in `:root`, typography, layout, and mobile styles |
| `script.js` | The `projects` object controls the details shown when a project is opened; the `emailAddress` value controls the copy button |
| `assets/Balajikumar_resume.pdf` | Replace with an updated resume using the same filename |
| `assets/balaji-kumar.jpeg` | Your profile photo in the opening section |
| `assets/template-store.jpg` | Screenshot of the Mini SaaS Template Store application |
| `assets/talvyniq.png` | Screenshot of the deployed Talvyniq application |
| `assets/Udemy-Web-Development-Certificate.pdf` | Downloadable Udemy course certificate |
| `assets/favicon.svg` | Browser tab icon |

When changing your email, update both its links in `index.html` and `emailAddress` in `script.js`. The footer year updates automatically.

## Project visuals and links

The portfolio features two deployed projects, with separate live-demo, source, and detail links:

| Project | Live application | Source repository |
| --- | --- | --- |
| Talvyniq — Job Portal & Resume Analyzer | https://talvyniq.vercel.app/ | https://github.com/balajikumar-dev/talvyniq |
| Mini SaaS Template Store | https://mini-saas-template-store.vercel.app/ | https://github.com/balajikumar-dev/fullstack-intern-task |

Both frontend addresses returned HTTP 200 with the expected application titles on 16 October 2026. Talvyniq's health endpoint also reported MongoDB and Cloudinary enabled. Talvyniq's repository is private, so visitors require repository access to view its source.

Talvyniq's description covers job discovery, role-based application management, private resume uploads, local keyword analysis, and explicit skill-overlap recommendations. It does not claim live AI analysis. Mini SaaS details follow its public source README; the templates inside the application are sample design concepts.

The resume PDF was replaced from the user's updated resume document. The continued-learning section links the supplied Udemy course certificate. The original downloadable asset filename is retained so existing resume links continue to work.

GitHub profile: https://github.com/balajikumar-dev

Contact buttons open email, phone, GitHub, or LinkedIn applications/pages. There is no contact form backend. The site supports GitHub Pages: publish the main branch from the repository root.
