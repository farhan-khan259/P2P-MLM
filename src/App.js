import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLayout from './Components/Admin/Common/AdminLayout';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import MemberView from './Components/Admin/Members/MemberView/MemberView';
import EditProfile from './Components/Admin/Members/EditProfile/EditProfile';
import MemberPassword from './Components/Admin/Members/MemberPassword/MemberPassword';
import MemberBlockList from './Components/Admin/Members/MemberBlockList/MemberBlockList';
import MemberAlertList from './Components/Admin/Members/MemberAlertList/MemberAlertList';
import TeamView from './Components/Admin/Tree/TeamView/TeamView';
import MyDirectReferral from './Components/Admin/Tree/MyDirectReferral/MyDirectReferral';
import MyTree from './Components/Admin/Tree/MyTree/MyTree';
import TeamLevel from './Components/Admin/Tree/TeamLevel/TeamLevel';
import MyLevel from './Components/Admin/Tree/MyLevel/MyLevel';
import PaymentRequest from './Components/Admin/Payment/PaymentRequest/PaymentRequest';
import LevelIncome from './Components/Admin/Income/LevelIncome/LevelIncome';
import TicketHistory from './Components/Admin/SupportTicket/TicketHistory/TicketHistory';
import BlockUnblock from './Components/Admin/Other/BlockUnblock/BlockUnblock';
import SignOut from './Components/Admin/SignOut/SignOut';
import AdminLogin from './Components/Admin/AdminLogin/AdminLogin';
import UserLayout from './Components/UserPanel/Common/UserLayout';
import UserLogin from './Components/UserPanel/UserLogin/UserLogin';
import UserDashboard from './Components/UserPanel/UserDashboard/UserDashboard';
import MyProfile from './Components/UserPanel/Profile/MyProfile/MyProfile';
import UpdateProfile from './Components/UserPanel/Profile/UpdateProfile/UpdateProfile';
import UpdateBankDetails from './Components/UserPanel/Profile/UpdateBankDetails/UpdateBankDetails';
import ChangePassword from './Components/UserPanel/Profile/ChangePassword/ChangePassword';
import DirectList from './Components/UserPanel/Team/DirectList/DirectList';
import UserMyTree from './Components/UserPanel/Team/MyTree/MyTree';
import MyTeam from './Components/UserPanel/Team/MyTeam/MyTeam';
import TeamLevelUser from './Components/UserPanel/Team/TeamLevel/TeamLevel';
import MyLevelUser from './Components/UserPanel/Team/MyLevel/MyLevel';
import SelfPaymentHistory from './Components/UserPanel/Payment/SelfPaymentHistory/SelfPaymentHistory';
import PaymentRequestHistory from './Components/UserPanel/Payment/PaymentRequestHistory/PaymentRequestHistory';
import TotalLevelIncome from './Components/UserPanel/Income/TotalLevelIncome/TotalLevelIncome';
import UserLevelIncome from './Components/UserPanel/Income/LevelIncome/LevelIncome';
import CreateTicket from './Components/UserPanel/SupportTicket/CreateTicket/CreateTicket';
import UserSignOut from './Components/UserPanel/SignOut/UserSignOut';
import PublicLayout from './Components/Public/Common/PublicLayout';
import Home from './Components/Public/Home/Home';
import AboutUs from './Components/Public/About/AboutUs';
import HelpingProcess from './Components/Public/HelpingProcess/HelpingProcess';
import OurActivity from './Components/Public/OurActivity/OurActivity';
import Gallery from './Components/Public/Gallery/Gallery';
import Contact from './Components/Public/Contact/Contact';
import Register from './Components/Public/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="helping-process" element={<HelpingProcess />} />
          <Route path="our-activity" element={<OurActivity />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="registration" element={<Register />} />
          <Route path="user-login" element={<UserLogin />} />
        </Route>

        <Route path="/user" element={<UserLayout />}>
          <Route index element={<Navigate to="/user/dashboard" replace />} />
          <Route path="dashboard" element={<UserDashboard />} />

          <Route path="profile/my-profile" element={<MyProfile />} />
          <Route path="profile/update-profile" element={<UpdateProfile />} />
          <Route path="profile/update-bank-details" element={<UpdateBankDetails />} />
          <Route path="profile/change-password" element={<ChangePassword />} />

          <Route path="team/direct-list" element={<DirectList />} />
          <Route path="team/my-tree" element={<UserMyTree />} />
          <Route path="team/my-team" element={<MyTeam />} />
          <Route path="team/team-level" element={<TeamLevelUser />} />
          <Route path="team/my-level" element={<MyLevelUser />} />

          <Route path="payment/self-payment-history" element={<SelfPaymentHistory />} />
          <Route path="payment/payment-request-history" element={<PaymentRequestHistory />} />

          <Route path="income/total-level-income" element={<TotalLevelIncome />} />
          <Route path="income/level-income" element={<UserLevelIncome />} />

          <Route path="support/create-ticket" element={<CreateTicket />} />
          <Route path="sign-out" element={<UserSignOut />} />

          <Route path="*" element={<Navigate to="/user/dashboard" replace />} />
        </Route>

        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="members/member-view" element={<MemberView />} />
          <Route path="members/edit-profile" element={<EditProfile />} />
          <Route path="members/member-password" element={<MemberPassword />} />
          <Route path="members/member-block-list" element={<MemberBlockList />} />
          <Route path="members/member-alert-list" element={<MemberAlertList />} />

          <Route path="tree/team-view" element={<TeamView />} />
          <Route path="tree/my-direct-referral" element={<MyDirectReferral />} />
          <Route path="tree/my-tree" element={<MyTree />} />
          <Route path="tree/team-level" element={<TeamLevel />} />
          <Route path="tree/my-level" element={<MyLevel />} />

          <Route path="payment/payment-request" element={<PaymentRequest />} />
          <Route path="income/level-income" element={<LevelIncome />} />
          <Route path="support-ticket/ticket-history" element={<TicketHistory />} />
          <Route path="other/block-unblock" element={<BlockUnblock />} />
          <Route path="sign-out" element={<SignOut />} />

          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;