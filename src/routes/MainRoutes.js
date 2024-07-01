import { lazy } from 'react';

// project imports
import Grid from '@mui/system/Unstable_Grid/Grid';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AddEmployee from 'views/AddEmployee/AddEmployee';
import AdminProfile from 'views/AdminProfile/AdminProfile';
import CallDashboard from 'views/Call/Components/CallDashboard';
import AllProperties from 'views/Contact/Components/AllProperties';
import ContactDashboard from 'views/Contact/Components/ContactDashboard';
import EmailDashboard from 'views/Email/Components/EmailDashboard';
import Details from 'views/Inbound/Details';
import LeadDashboard from 'views/Lead/Components';
import Meeting from 'views/Metting';
import MeetingDashboard from 'views/Metting/Components/MeetingDashboard';
import DetailsOutbound from 'views/Outbound/Details';
import Payments from 'views/Payments';
import Property from 'views/Property';
import PropertyDashboard from 'views/Property/Components/index';
import TaskDashboard from 'views/Task/Components/TaskDashboard';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const LeadManagement = Loadable(lazy(() => import('views/Lead')));
const OutboundLeadManagement = Loadable(lazy(() => import('views/OutboundLead')));
const ContactManagement = Loadable(lazy(() => import('views/Contact')));
const Call = Loadable(lazy(() => import('views/Call')));
const Policy = Loadable(lazy(() => import('views/Policy')));
const Metting = Loadable(lazy(() => import('views/Metting')));
const Email = Loadable(lazy(() => import('views/Email')));
const Task = Loadable(lazy(() => import('views/Task')));
const EmailTemplates = Loadable(lazy(() => import('views/EmailTemplates')));
const Document = Loadable(lazy(() => import('views/Documents')));
const Inbound = Loadable(lazy(() => import('views/Inbound')));
const Calender = Loadable(lazy(() => import('views/Calender')));
const Outbound = Loadable(lazy(() => import('views/Outbound')));
const OverviewContactDetail = Loadable(lazy(() => import('views/Contact/OverView')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'app',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'lead',
          element: <LeadManagement />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'outbound-lead',
          element: <OutboundLeadManagement />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'contact',
          element: <ContactManagement />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'property',
          element: <Property />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'task',
          element: <Task />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'meeting',
          element: <Meeting />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'call',
          element: <Call />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'email',
          element: <Email />
        }
      ]
    },

    {
      path: 'dashboard',
      children: [
        {
          path: 'calendar',
          element: <Calender />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'payments',
          element: <Payments />
        }
      ]
    },
    // Test Ai link
    {
      path: 'dashboard',
      children: [
        {
          path: 'outbounds',
          element: <Outbound />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'documents',
          element: <Document />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'inbound-calls',
          element: <Inbound />
        }
      ]
    },

    {
      path: 'dashboard',
      children: [
        {
          path: '/dashboard/lead/view/:id',
          element: <LeadDashboard />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: '/dashboard/inbound-calls/view/:id',
          element: <Details />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: '/dashboard/outbound-calls/view/:id',
          element: <DetailsOutbound />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: '/dashboard/inb/view/:id',
          element: <ContactDashboard />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: '/dashboard/property/view/:id',
          element: <PropertyDashboard />
        }
      ]
    },
    {
      path: 'property',
      children: [
        {
          path: '/property/selectableproperty/:id',
          element: <AllProperties />
        }
      ]
    },
    {
      path: 'task',
      children: [
        {
          path: '/task/view/:id',
          element: <TaskDashboard />
        }
      ]
    },
    {
      path: 'meetings',
      children: [
        {
          path: '/meetings/view/:id',
          element: <MeetingDashboard />
        }
      ]
    },
    {
      path: 'calls',
      children: [
        {
          path: '/calls/view/:id',
          element: <CallDashboard />
        }
      ]
    },
    {
      path: 'email',
      children: [
        {
          path: '/email/view/:id',
          element: <EmailDashboard />
        }
      ]
    },
    {
      path: 'profile',
      children: [
        {
          path: '/profile',
          element: <AdminProfile />
        }
      ]
    },
    {
      path: 'addemployee',
      children: [
        {
          path: '/addemployee',
          element: (
            <Grid container item xs={12} sm={6} md={12} justifyContent={'center'}>
              <AddEmployee />
            </Grid>
          )
        }
      ]
    }
  ]
};

export default MainRoutes;
