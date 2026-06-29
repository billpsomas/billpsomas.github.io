---
layout: post
title: "Accepted to ECCV 2026 — REGLUE Your Latents 🎉"
date: 2026-06-18
categories: news
related_posts: false
description: "Our paper accepted to ECCV 2026. Code and preprint available."
---

We're excited to announce that our paper "REGLUE Your Latents with Global and Local Semantics for Entangled Diffusion" has been accepted to ECCV 2026.

Authors: Giorgos Petsangourakis, Christos Sgouropoulos, Bill Psomas, Theodoros Giannakopoulos, Giorgos Sfikas, Ioannis Kakogeorgiou.

Highlights:

- REGLUE is a unified framework that jointly models VAE latents, global semantics, and local Vision Foundation Model semantics for faster, higher-fidelity diffusion-based image generation.
- Existing methods such as REPA and REG inject only a narrow slice of VFM features. REGLUE jointly models compact, non-linearly compressed patch-level semantics alongside VAE latents, with a global `[CLS]` token and an alignment loss providing complementary gains.
- REGLUE with SiT-XL/2 matches 1M-step state of the art in just 700k iterations, using roughly 30% fewer training steps, with consistent FID improvements across training budgets.

Preprint: [arXiv:2512.16636](https://arxiv.org/abs/2512.16636)

Code: [github.com/giorgospets/reglue](https://github.com/giorgospets/reglue)

Many thanks to the co-authors and reviewers for their feedback.
