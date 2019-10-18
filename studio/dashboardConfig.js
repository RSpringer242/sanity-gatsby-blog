export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5daa3d183649f50179240683',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-a7yi8x3n',
                  apiId: '580a5ef6-a878-446c-aebe-6f4361b50e41'
                },
                {
                  buildHookId: '5daa3d18e0acb80177e1038d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-o838hn7f',
                  apiId: '05756868-12ef-4987-b1b0-d4ac75f34da5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RSpringer242/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-o838hn7f.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
