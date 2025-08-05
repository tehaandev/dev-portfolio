---
title: "Built a custom web app for a UK-based startup in the foster care sector - solo."
date: "2025-08-04"
excerpt: "Developed a secure web application for Fosterli Ltd. to streamline the foster care application process, enhancing collaboration and compliance."
tags:
  [
    "Case Study",
    "Web Development",
    "Next.js",
    "PostgreSQL",
    "Prisma",
    "Foster Care",
  ]
cover: "/images/fosterli/cover.png"
author: "Tehaan Perera"
published: false
---

Fosterli Ltd. is a startup based in the UK focusing on digitizing the foster care application process, and they needed a secure web application that could handle complex and highly regulated assessments across to-be foster carers and agencies.

The current process relied on large amounts of physical forms — leading to data loss, redundancy, and almost no collaboration between applicants and their social workers.

As the sole developer, I designed, built, and deployed a custom CRM solution that aims to replace the paper-based workflows with a modern, secure, and efficient web application.

---

## ⚙️ Engineering Challenges

Among the many features we deployed, a few stood out due to their complexity:

- A two-stage assessment, with 6 steps in stage one and 15+ steps in stage two, including conditional (dynamic) sections and repeatable fields (e.g., multiple pets).
- Assignable form fields that allowed users to delegate specific fields to others for completion and submission — ensuring the assignee only had access to their designated fields.
- A real-time chat system enabling applicants to communicate with their designated social workers.
- Strict compliance requirements, including GDPR and industry-specific regulations related to handling sensitive data on minors.

---

## 🛠️ Key Features Shipped

- Built a flexible system to handle multi-stage assessments (multiple steps each) with repeatable sections (e.g., multiple pets).
- Implemented field assignment logic that allows users to delegate specific form fields to others. Assignees could only view and submit their designated fields — no extra access.
- Integrated a live chat system between applicants and their assigned social workers, scoped by role and case ID to maintain strict separation.
- Architected with GDPR and industry-specific compliance in mind, especially around sensitive PII and minor-related data. Used server-side rendering and secure storage patterns to enforce best practices.
- Took complete ownership of dev, infra, and CI/CD — using Next.js App Router, Prisma/PostgreSQL (Amazon RDS), GitHub Actions, Docker, and EC2. Also added Sentry for real-time monitoring and alerting.

---

## 🧰 Tech Stack

- **Frontend:** Next.js 14 (App Router)
- **Backend:** PostgreSQL (with Prisma ORM), Node.js, Socket.IO, Next.js Server Actions
- **Hosting:**
  - Amazon EC2 for compute
  - Amazon RDS for database
- **CI/CD:** GitHub Actions + Docker
- **Monitoring:** Sentry

---

Building Fosterli helped me in a few different ways. It helped me apply theoretical knowledge of design patterns, SOLID principles, and clean architecture in a real-world scenario. It also gave me a chance to work with complex data structures and relationships, especially around the multi-stage assessments and conditional logic. Further, I also learned how to balance compliance requirements with user experience, especially in a sensitive domain like foster care.

Working solo on this project also taught me how to manage the entire software development lifecycle, from requirements gathering and system design to deployment and monitoring. It meant that I had to manage client communications, scope creep, and delivery end-to-end — all of which made me a sharper and more accountable engineer.

---

Fosterli is now in active beta with real users - replacing the previous paper-based workflows with a modern, secure, and efficient web application. It was a great opportunity to apply my skills in a meaningful way, knowing that the end product would have a positive impact on the foster care sector.

