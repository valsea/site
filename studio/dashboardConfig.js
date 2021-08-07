export default {
  widgets: [
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
                  buildHookId: '610dbc2d185b2030a791c959',
                  title: 'Sanity Studio',
                  name: 'site-studio-k6pu516d',
                  apiId: '1d229366-f0c6-456b-a21c-b0f2990136d3'
                },
                {
                  buildHookId: '610dbc2ea0112c3d1c21b3a3',
                  title: 'Career Website',
                  name: 'site-web-bwp5z379',
                  apiId: '449a6fe5-2b9a-4bf6-aa7d-075b7783e138'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xavier-galdeano/site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://site-web-bwp5z379.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent career posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
