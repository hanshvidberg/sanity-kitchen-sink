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
                  buildHookId: '5ec77d87fbfdbe81e5c0f390',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-za68hu33',
                  apiId: 'd7c4ca4e-2db1-47a3-a0b1-775198688721'
                },
                {
                  buildHookId: '5ec77d87fbfdbe6241c0f049',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9ou5f6ed',
                  apiId: 'e87dd079-e701-4a45-b49a-ceca0a313ec2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hanshvidberg/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9ou5f6ed.netlify.app', category: 'apps'}
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
