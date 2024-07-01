import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project imports
import { gridSpacing } from 'store/constant';
import PopularCard from './PopularCard';
import TotalCallsCard from './TotalCallsCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import TotalLeadsCard from './TotalLeadsCard';
import TotalPropertiesCard from './TotalPropertiesCard';
import TotalTaskCard from './TotalTaskCard';

import { getApi } from 'views/services/api';
import BasicLineChart from './LineChar';
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const theme = useTheme();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const [contactData, setContactData] = useState([]);
  const [taskData, setTaskData] = useState([]);
  const [leadData, setLeadData] = useState([]);
  const [propertyData, setPropertyData] = useState([]);
  const [dashboardCardData, setDashboardCardData] = useState({
    inboundCalls: [],
    inboundLeads: [],
    outboundCalls: [],
    outboundLeads: []
  });
  // const [meetingData, setMeetingData] = useState([]);
  // const [emailData, setEmailData] = useState([]);
  // const [callData, setCallData] = useState([]);
  const [inboundChartContent, setInboundChartContent] = useState({
    categories: ['Total Calls Received'],
    series: [],
    callTime: ``,
    title: `Inbound Calls Report`
  });
  const [outboundChartContent, setOutboundChartContent] = useState({
    categories: ['Answered Calls', 'Dailed Calls', 'Total Contacts Uploaded', 'Total Off Plan', 'Total Secondary Market'],
    series: [],
    callTime: ``,
    title: `Outbound Calls Report`
  });
  const user = JSON.parse(localStorage.getItem('user'));

  const fetchOutbondData = async () => {
    try {
      const { data } = await getApi(`api/phoneCall/outboundStats`);
      const items = data.data;
      setDashboardCardData((prev) => ({
        ...prev,
        outboundCalls: {
          title: `Total Outbound Calls`,
          number: items.dialedCalls
        },
        outboundLeads: {
          title: `Total Outbound Leads`,
          number: items.totalQualifiedOutboundLeads
        }
      }));
      setOutboundChartContent((prev) => ({
        ...prev,
        series: [
          {
            name: 'Outbound Call Data',
            data: [items.answeredCalls, items.dialedCalls, items.totalContactsUploaded, items.totalOffPlan, items.totalSecondaryMarket]
          }
        ],
        callTime: `${items.totalCallDuration} mins`
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchInbondData = async () => {
    try {
      const { data } = await getApi(`api/llm/inboundCallStats`);
      const items = data.data;
      setDashboardCardData((prev) => ({
        ...prev,
        inboundCalls: {
          title: `Total Inbound Calls`,
          number: items.totalCallsReceived
        },
        inboundLeads: {
          title: `Total Inbound Leads`,
          number: items.totalInboundCallLead
        }
      }));
      setInboundChartContent((prev) => ({
        ...prev,
        series: [
          {
            name: 'Inbound Call Data',
            data: [items.totalCallsReceived]
          }
        ],
        callTime: `${items.totalCallDuration} mins`
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchContactsData = async () => {
    try {
      const response = await getApi(user.role === 'admin' ? 'api/contact/viewallcontacts' : `api/contact/viewusercontacts/${user._id}`);
      user.role === 'admin' ? setContactData(response.data.contactDetails) : setContactData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLeadData = async () => {
    try {
      const response = await getApi(user.role === 'admin' ? 'api/lead/viewallleads' : `api/lead/viewuserleads/${user._id}`);
      console.log(response);
      setLeadData(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPropertyData = async () => {
    try {
      const response = await getApi(user.role === 'admin' ? `api/property/viewallproperties` : `api/property/viewuserproperty/${user._id}`);
      setPropertyData(response?.data?.properties);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTaskData = async () => {
    try {
      const response = await getApi(user.role === 'admin' ? 'api/task/viewalltasks' : `api/task/viewusertasks/${user._id}`);
      setTaskData(response?.data?.taskData);
    } catch (error) {
      console.log(error);
    }
  };
  // const fetchMeetingData = async () => {
  //   try {
  //     const response = await getApi(user.role === 'admin' ? 'api/meeting/viewallmeetings' : `api/meeting/viewusermeetings/${user._id}`);
  //     setMeetingData(response?.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const fetchCallData = async () => {
  //   try {
  //     const response = await getApi(user.role === 'admin' ? 'api/phoneCall/viewallcalls' : `api/phoneCall/viewusercalls/${user._id}`);
  //     setCallData(response?.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const fetchEmailData = async () => {
  //   try {
  //     const response = await getApi(user.role === 'admin' ? 'api/email/viewallemails' : `api/email/viewuseremails/${user._id}`);
  //     setEmailData(response?.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    fetchInbondData();
    fetchOutbondData();
    fetchContactsData();
    fetchLeadData();
    fetchPropertyData();
    fetchTaskData();
    // fetchMeetingData();
    // fetchCallData();
    // fetchEmailData();
  }, []);

  // console.log(contactData, 'nnnnnnnnnn');
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <TotalLeadsCard isLoading={isLoading} leadData={dashboardCardData.inboundLeads} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <TotalCallsCard isLoading={isLoading} callData={dashboardCardData.inboundCalls} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <TotalLeadsCard isLoading={isLoading} leadData={dashboardCardData.outboundLeads} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <TotalCallsCard isLoading={isLoading} callData={dashboardCardData.outboundCalls} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6}>
            {/* <BasicLineChart isLoading={isLoading} inboundData={inboundData} /> */}
            <TotalGrowthBarChart isLoading={isLoading} content={inboundChartContent} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TotalGrowthBarChart isLoading={isLoading} content={outboundChartContent} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
