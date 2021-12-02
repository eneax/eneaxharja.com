---
title: 'Combine JSX components and MDX documents'
date: '2021-07-01'
description: ''
tags: ['gatsby', 'snippets']
---

By default, the `gatsby-plugin-mdx` plugin supports frontmatter, so you can define values like `slug`, `date` and `title` at the beginning of your MDX document:

```markdown
---
slug: '/best-post-ever'
date: '3000-01-01'
title: 'Best Post Ever'

faq:
  - id: '1'
    question: 'Question One'
    answer: 'Answer One'

  - id: '2'
    question: 'Question Two'
    answer: 'Answer Two'

  - id: '3'
    question: 'Question Three'
    answer: 'Answer Three'
---
```

The frontmatter is also available in `props.pageContext.frontmatter` and can be accessed in blocks of `JSX` in your `MDX` document. This functionality can be very useful if you have repetitive content and want to loop over it.

In the example above, we have a list of faq questions. If you want to render all the faq on your page, you can either run a GraphQL query on your template file or simply import a React component into the MDX file:

```markdown
---
slug: '/best-post-ever'
date: '3000-01-01'
title: 'Best Post Ever'

faq:
  - id: '1'
    question: 'Question One'
    answer: 'Answer One'

  - id: '2'
    question: 'Question Two'
    answer: 'Answer Two'

  - id: '3'
    question: 'Question Three'
    answer: 'Answer Three'
---

import { Faq } from "../components/faq"

<h1>{props.pageContext.frontmatter.title}</h1>

<Faq faqItems={props.pageContext.frontmatter.faq} />
```
