---
title: "Built a custom web app for a UK-based startup in the foster care sector - solo."
date: "2025-08-04"
excerpt: "Developed a secure web application for Fosterli Ltd. to streamline the foster care application process, enhancing collaboration and compliance."
tags: ["Web Development", "Next.js", "PostgreSQL", "Prisma", "Foster Care"]
cover: "/path/to/cover/image.jpg"
carousel: ["/path/to/image1.jpg", "/path/to/image2.jpg", "/path/to/image3.jpg"]
author: "Tehaan Perera"
published: false
---

<!-- Header or title not required in the body -->

Fosterli Ltd. is a startup based in the UK focusing on digitizing the foster care application process and they needed a secure web application that could handle complex and highly regulated assessments across to-be foster carers and agencies. The current process relied on large amounts of physical forms leading to data loss or redundancy, and allowing almost no collaboration between applicants and their social workers.

As the sole developer of this web app, I took full ownership of the system design, development and deployment.

Among the many features that we deployed, there were a few that really stood out in terms of complexity.

- Needed a 2-stage assessment each with 6 and 15+ steps respectively along with conditional (dynamic) section and repeatable fields (e.g., multiple pets).
- Assignable form fields on one stage would allow a users to assign form field to another user for completion and submission in a way that the assignee only has access to the assigned fields.
- Real-time chat that allows applicant to talk designated social workers.
- Lastly, the compliance requirements such as GDPR and regulations specific to this industry such as handling data related to minors.

The tech stack that was used was Next.js 14 (App Router), PostgreSQL with Prisma hosted on Amazon RDS, Amazon EC2 for compute, Sentry for monitoring and error tracking, and GitHub Actions and Docker for CI/CD.

## 🛠️ Key Features Shipped

- Built a flexible system to handle multi-stage assessments (multiple steps each) with repeatable sections (e.g., multiple pets).
- Implemented field assignment logic that allows users to delegate specific form fields to others. Assignees could only view and submit their designated fields — no extra access.
- Integrated a live chat system between applicants and their assigned social workers, scoped by role and case ID to maintain strict separation.
- Architected with GDPR and industry-specific compliance in mind, especially around sensitive PII and minor-related data. Used server-side rendering and secure storage patterns to enforce best practices.
- Took complete ownership of dev, infra, and CI/CD — using Next.js App Router, Prisma/PostgreSQL (Amazon RDS), GitHub Actions, Docker, and EC2. Also added Sentry for real-time monitoring and alerting.

