// assets
import {
  IconAntennaBars5,
  IconCalendarEvent,
  IconChecklist,
  IconFileInvoice,
  IconFileUpload,
  IconHome,
  IconMail,
  IconNotebook,
  IconPhoneCall,
  IconPhoneCheck,
  IconPhoneIncoming,
  IconPhoneOutgoing,
  IconPhoneX,
  IconUsers
} from '@tabler/icons';

// constant
const icons = {
  IconHome,
  IconCalendarEvent,
  IconMail,
  IconFileUpload,
  IconFileInvoice,
  IconPhoneCall,
  IconAntennaBars5,
  IconChecklist,
  IconNotebook,
  IconPhoneCheck,
  IconUsers,
  IconPhoneIncoming,
  IconPhoneOutgoing,
  IconPhoneX
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  // title: 'Dashboard-Menu',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/app',
      icon: icons.IconHome,
      breadcrumbs: false
    },
    {
      id: '01',
      title: 'Lead Management',
      type: 'collapse',
      url: '#',
      icon: icons.IconAntennaBars5,
      breadcrumbs: false,
      children: [
        {
          id: '01-01',
          title: 'Inbound Leads',
          type: 'item',
          url: '/dashboard/lead',
          icon: icons.IconAntennaBars5,
          breadcrumbs: false
        },
        {
          id: '01-02',
          title: 'Outbound Leads',
          type: 'item',
          url: '/dashboard/outbound-lead',
          icon: icons.IconAntennaBars5,
          breadcrumbs: false
        }
      ]
    },
    {
      id: '02',
      title: 'Calls',
      type: 'collapse',
      url: '#',
      icon: icons.IconPhoneIncoming,
      breadcrumbs: false,
      children: [
        {
          id: '02-01',
          title: 'Inbound Calls',
          type: 'item',
          url: '/dashboard/inbound-calls',
          icon: icons.IconPhoneIncoming,
          breadcrumbs: false
        },
        {
          id: '02-02',
          title: 'Outbound Calls',
          type: 'item',
          url: '/dashboard/outbounds',
          icon: icons.IconPhoneOutgoing,
          breadcrumbs: false
        }
      ]
    },
    {
      id: '03',
      title: 'Bad leads',
      type: 'collapse',
      url: '#',
      icon: icons.IconPhoneIncoming,
      breadcrumbs: false,
      children: [
        {
          id: '03-01',
          title: 'Inbound Bad Leads',
          type: 'item',
          url: '/dashboard/no-answer',
          icon: icons.IconPhoneIncoming,
          breadcrumbs: false
        },
        {
          id: '03-02',
          title: 'Outbound Bad Leads',
          type: 'item',
          url: '/dashboard/no-answer',
          icon: icons.IconPhoneOutgoing,
          breadcrumbs: false
        }
      ]
    },
    {
      id: '02',
      title: 'Contact Management',
      type: 'item',
      url: '/dashboard/contact',
      icon: icons.IconPhoneCheck,
      breadcrumbs: false
    },
    {
      id: '03',
      title: 'Add Employee',
      type: 'item',
      url: '/addemployee',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
    {
      id: '04',
      title: 'Property',
      type: 'item',
      url: '/dashboard/property',
      icon: icons.IconNotebook,
      breadcrumbs: false
    },
    {
      id: '05',
      title: 'Tasks',
      type: 'item',
      url: '/dashboard/task',
      icon: icons.IconChecklist,
      breadcrumbs: false
    },
    {
      id: '06',
      title: 'Meeting',
      type: 'item',
      url: '/dashboard/meeting',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
    {
      id: '07',
      title: 'Calls',
      type: 'item',
      url: '/dashboard/call',
      icon: icons.IconPhoneCall,
      breadcrumbs: false
    },
    {
      id: '08',
      title: 'Emails',
      type: 'item',
      url: '/dashboard/email',
      icon: icons.IconMail,
      breadcrumbs: false
    },

    {
      id: '09',
      title: 'Calendar',
      type: 'item',
      url: '/dashboard/calendar',
      icon: icons.IconCalendarEvent,
      breadcrumbs: false
    },
    {
      id: '10',
      title: 'Payments',
      type: 'item',
      url: '/dashboard/payments',
      icon: icons.IconFileUpload,
      breadcrumbs: false
    },
    {
      id: '11',
      title: 'Documents',
      type: 'item',
      url: '/dashboard/documents',
      icon: icons.IconFileInvoice,
      breadcrumbs: false
    }
  ]
};

// ==============================|| USER DASHBOARD MENU ITEMS ||============================== //
const userdashboard = {
  // title: 'Dashboard-Menu',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/app',
      icon: icons.IconHome,
      breadcrumbs: false
    },
    {
      id: '01',
      title: 'Lead Management',
      type: 'item',
      url: '/dashboard/lead',
      icon: icons.IconAntennaBars5,
      breadcrumbs: false
    },
    {
      id: '02',
      title: 'Contact Management',
      type: 'item',
      url: '/dashboard/contact',
      icon: icons.IconPhoneCheck,
      breadcrumbs: false
    },
    {
      id: '03',
      title: 'Property',
      type: 'item',
      url: '/dashboard/property',
      icon: icons.IconNotebook,
      breadcrumbs: false
    },
    {
      id: '04',
      title: 'Tasks',
      type: 'item',
      url: '/dashboard/task',
      icon: icons.IconChecklist,
      breadcrumbs: false
    },
    {
      id: '05',
      title: 'Meeting',
      type: 'item',
      url: '/dashboard/meeting',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
    {
      id: '06',
      title: 'Calls',
      type: 'item',
      url: '/dashboard/call',
      icon: icons.IconPhoneCall,
      breadcrumbs: false
    },
    {
      id: '07',
      title: 'Emails',
      type: 'item',
      url: '/dashboard/email',
      icon: icons.IconMail,
      breadcrumbs: false
    }
  ]
};

export { dashboard, userdashboard };
