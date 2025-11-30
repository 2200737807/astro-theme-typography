import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  // site: { title: "講評世界" },
  // seo: { twitter: "@moeyua13" },
}
{
  comments: {
    giscus: {
      repo: '2200737807/astro-theme-typography'
      repoId: 'R_kgDOKy9HOQ'
      category: 'Blog Post Comments'
      categoryId: 'DIC_kwDOQdeeXs4CzNtE'
      mapping: 'title'
      strict: '0'
      reactionsEnabled: '1'
      emitMetadata: '1'
      inputPosition: 'top'
      theme: 'light'
      lang: 'zh-CN'
      loading: 'lazy'
    }
  }
}
