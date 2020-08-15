---
title: 'Prevent git camelCase issue'
type: note
date: 2020-08-06T10:57:11.004Z
featured: false
tags:
  - Git
desc: git joke
---

Linux-like OS not very glad about camelCase code-style (some developers too). Over the years everything can be fine, but once something might go wrong. For example (last file):

![ignoring](./image_2020-08-06_22-10-02.png)

You can prevent this behavior by update local git configuration:

```shell{1}
git config core.ignorecase false
```
