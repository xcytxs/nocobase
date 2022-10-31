export default {
  '/welcome': [
    {
      title: 'Welcome',
      'title.zh-CN': '欢迎',
      type: 'group',
      children: [
        '/welcome/introduction/index',
        '/welcome/introduction/features',
        '/welcome/introduction/when',
        // '/welcome/introduction/learning-guide',
      ],
    },
    {
      title: 'Getting started',
      'title.zh-CN': '快速开始',
      type: 'group',
      children: [
        {
          title: 'Installation',
          'title.zh-CN': '安装',
          type: 'subMenu',
          children: [
            '/welcome/getting-started/installation/index',
            '/welcome/getting-started/installation/docker-compose',
            '/welcome/getting-started/installation/create-nocobase-app',
            '/welcome/getting-started/installation/git-clone',
          ],
        },
        {
          title: 'Upgrading',
          'title.zh-CN': '升级',
          type: 'subMenu',
          children: [
            '/welcome/getting-started/upgrading/index',
            '/welcome/getting-started/upgrading/docker-compose',
            '/welcome/getting-started/upgrading/create-nocobase-app',
            '/welcome/getting-started/upgrading/git-clone',
          ],
        },
      ],
    },
    {
      title: 'Release',
      'title.zh-CN': '版本发布',
      type: 'group',
      children: [
        '/welcome/release/index',
        '/welcome/release/v08-changelog',
      ],
    },
    {
      title: 'Community',
      'title.zh-CN': '社区',
      type: 'group',
      children: [
        '/welcome/community/contributing',
        // '/welcome/community/faq',
        '/welcome/community/translations',
        
        '/welcome/community/thanks',
      ],
    },
  ],
  '/manual': [
    {
      title: 'Quick Start',
      'title.zh-CN': '快速上手',
      type: 'group',
      children: [
        '/manual/quick-start/the-first-app',
        '/manual/quick-start/functional-zoning',
        '/manual/quick-start/ui-editor-mode',
        '/manual/quick-start/plugins',
      ],
    },
    {
      title: 'Core Concepts',
      'title.zh-CN': '核心概念',
      type: 'group',
      children: [
        '/manual/core-concepts/a-b-c',
        '/manual/core-concepts/collections',
        '/manual/core-concepts/blocks',
        '/manual/core-concepts/actions',
        '/manual/core-concepts/menus',
        '/manual/core-concepts/containers',
      ],
    },
    {
      title: 'Blocks Guide',
      'title.zh-CN': '区块指南',
      type: 'group',
      children: [
        '/manual/blocks-guide/charts',
      ],
    },
  ],
  '/development': [
    {
      title: 'Getting started',
      'title.zh-CN': '快速开始',
      type: 'group',
      children: [
        '/development/index',
        '/development/your-fisrt-plugin',
        '/development/app-ds',
        '/development/plugin-ds',
        '/development/life-cycle',
        // '/development/learning-guide',
      ],
    },
    {
      title: 'Server',
      'title.zh-CN': '服务端',
      type: 'group',
      children: [
        '/development/server/index',
        '/development/server/collections-fields',
        '/development/server/resources-actions',
        '/development/server/middleware',
        '/development/server/commands',
        '/development/server/events',
        '/development/server/i18n',
        '/development/server/migration',
        '/development/server/test',
      ],
    },
    {
      title: 'Client',
      'title.zh-CN': '客户端',
      type: 'group',
      children: [
        '/development/client/index',
        {
          title: 'UI 设计器',
          type: 'subMenu',
          children: [
            // '/development/client/ui-schema-designer/index',
            '/development/client/ui-schema-designer/what-is-ui-schema',
            '/development/client/ui-schema-designer/extending-schema-components',
            // '/development/client/ui-schema-designer/insert-adjacent',
            '/development/client/ui-schema-designer/designable',
            '/development/client/ui-schema-designer/component-library',
            // '/development/client/ui-schema-designer/collection-manager',
            // '/development/client/ui-schema-designer/acl',
            '/development/client/ui-schema-designer/x-designer',
            '/development/client/ui-schema-designer/x-initializer',
          ],
        },
        '/development/client/ui-router',
        '/development/client/settings-center',
        '/development/client/i18n',
        '/development/client/test',
      ],
    },
  ],
  '/api': [
    '/api/index',
    '/api/env',
    {
      title: 'HTTP API',
      type: 'subMenu',
      children: [
        '/api/http/index', 
        '/api/http/rest-api', 
      ],
    },
    {
      title: '@nocobase/server',
      type: 'subMenu',
      children: [
        '/api/server/application', 
        // '/api/server/plugin-manager', 
        '/api/server/plugin',
      ],
    },
    {
      title: '@nocobase/database',
      type: 'subMenu',
      children: [
        '/api/database/index',
        '/api/database/collection',
        '/api/database/field',
        '/api/database/repository',
        '/api/database/relation-repository/has-one-repository',
        '/api/database/relation-repository/has-many-repository',
        '/api/database/relation-repository/belongs-to-repository',
        '/api/database/relation-repository/belongs-to-many-repository',
        '/api/database/operators',
      ],
    },
    {
      title: '@nocobase/resourcer',
      type: 'subMenu',
      children: [
        '/api/resourcer/index',
        '/api/resourcer/resource',
        '/api/resourcer/action',
        '/api/resourcer/middleware',
      ],
    },
    {
      title: '@nocobase/acl',
      type: 'subMenu',
      children: [
        '/api/acl/index',
        '/api/acl/acl',
        '/api/acl/acl-role',
        '/api/acl/acl-resource',
        '/api/acl/acl-available-action',
        '/api/acl/acl-available-strategy',
        '/api/acl/allow-manager',
      ],
    },
    {
      title: '@nocobase/client',
      type: 'subMenu',
      children: [
        // '/api/client/index',
        '/api/client/application',
        '/api/client/route-switch',
        {
          title: 'SchemaDesigner',
          'title.zh-CN': 'SchemaDesigner',
          type: 'subMenu',
          children: [
            '/api/client/schema-designer/schema-component',
            '/api/client/schema-designer/schema-initializer',
            '/api/client/schema-designer/schema-settings',
          ],
        },
        {
          title: 'Extensions',
          'title.zh-CN': 'Extensions',
          type: 'subMenu',
          children: [
            // '/api/client/extensions/schema-component',
            '/api/client/extensions/collection-manager',
            '/api/client/extensions/block-provider',
            '/api/client/extensions/acl',
          ],
        },
      ],
    },
    {
      title: '@nocobase/cli',
      path: '/api/cli',
    },
    {
      title: '@nocobase/actions',
      path: '/api/actions',
    },
    {
      title: '@nocobase/sdk',
      path: '/api/sdk',
    },
  ],
};
