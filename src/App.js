import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLayout from './Components/Admin/Common/AdminLayout';
import AdminBlankPage from './Components/Admin/Common/AdminBlankPage';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import MembersLocation from './Components/Admin/Members/MembersLocation/MembersLocation';
import KYCRequest from './Components/Admin/Members/KYCRequest/KYCRequest';
import AllMemberPerformance from './Components/Admin/Members/AllMemberPerformance/AllMemberPerformance';
import MyDirectReferral from './Components/Admin/Tree/MyDirectReferral/MyDirectReferral';
import DonationReport from './Components/Admin/NetworkReports/DonationReport/DonationReport';
import NetworkExplorer from './Components/Admin/NetworkReports/NetworkExplorer/NetworkExplorer';
import LevelIncome from './Components/Admin/Income/LevelIncome/LevelIncome';
import TicketHistory from './Components/Admin/SupportTicket/TicketHistory/TicketHistory';
import SignOut from './Components/Admin/SignOut/SignOut';
import EPinRequest from './Components/Admin/ePin/EPinRequest';
import GenerateEPin from './Components/Admin/ePin/GenerateEPin';
import UnusedEPin from './Components/Admin/ePin/UnusedEPin';
import UsedEPin from './Components/Admin/ePin/UsedEPin';
import AllEPin from './Components/Admin/ePin/AllEPin';
import DeleteEPin from './Components/Admin/ePin/DeleteEPin';
import TransferHistory from './Components/Admin/ePin/TransferHistory';
import AdminLogin from './Components/Admin/AdminLogin/AdminLogin';
import UserLayout from './Components/UserPanel/Common/UserLayout';
import UserBlankPage from './Components/UserPanel/Common/UserBlankPage';
import UserLogin from './Components/UserPanel/UserLogin/UserLogin';
import UserDashboard from './Components/UserPanel/UserDashboard/UserDashboard';
import MyProfile from './Components/UserPanel/Profile/MyProfile/MyProfile';
import UpdateProfile from './Components/UserPanel/Profile/UpdateProfile/UpdateProfile';
import UpdateBankDetails from './Components/UserPanel/Profile/UpdateBankDetails/UpdateBankDetails';
import ChangePassword from './Components/UserPanel/Profile/ChangePassword/ChangePassword';
import UserKYCRequest from './Components/UserPanel/Profile/KYCRequest/KYCRequest';
import DirectList from './Components/UserPanel/Team/DirectList/DirectList';
import UserMyTree from './Components/UserPanel/Team/MyTree/MyTree';
import MyTeam from './Components/UserPanel/Team/MyTeam/MyTeam';
import SelfPaymentHistory from './Components/UserPanel/Payment/SelfPaymentHistory/SelfPaymentHistory';
import PaymentRequestHistory from './Components/UserPanel/Payment/PaymentRequestHistory/PaymentRequestHistory';
import UserLevelIncome from './Components/UserPanel/Income/LevelIncome/LevelIncome';
import DonationsIncome from './Components/UserPanel/Income/DonationsIncome/DonationsIncome';
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
import AllMembersList from './Components/Admin/Members/AllMembersList/AllMembersList';
import DatewiseLevelIncome from './Components/UserPanel/Income/DatewiseLevelIncome/DatewiseLevelIncome';
import ReceivedHelp from './Components/UserPanel/Payment/PaymentRequest/ReceivedHelp';
import TransactionHistory from './Components/UserPanel/Transactions/TransactionHistory/TransactionHistory';

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

          <Route path="my-profile/show-profile" element={<MyProfile />} />
          <Route path="profile/update-profile" element={<UpdateProfile />} />
          <Route path="my-profile/change-login-password" element={<ChangePassword />} />
          <Route path="my-profile/update-trans-password" element={<UpdateBankDetails />} />

          <Route path="plan-chart-letters/business-plan-chart" element={<UserBlankPage />} />
          <Route path="plan-chart-letters/welcome-letter" element={<UserBlankPage />} />
          <Route path="plan-chart-letters/business-card" element={<UserBlankPage />} />
          <Route path="plan-chart-letters/bank-information" element={<UserBlankPage />} />

          <Route path="kyc-request" element={<UserKYCRequest />} />

          <Route path="my-network/my-direct-network" element={<DirectList />} />
          <Route path="my-network/network-explorer" element={<UserMyTree />} />
          <Route path="my-network/downline-list" element={<MyTeam />} />

          <Route path="income-report/level-income" element={<UserLevelIncome />} />
          <Route path="income-report/donations-income" element={<DonationsIncome />} />
          <Route path="income-report/Datewise-level-income" element={<DatewiseLevelIncome />} />

          <Route path="donations/given-help" element={<SelfPaymentHistory />} />
          <Route path="donations/recieved-help" element={<ReceivedHelp />} />
          <Route path="donations/ReceivedHelp" element={<ReceivedHelp />} />

          <Route path="product/product-list" element={<UserBlankPage />} />
          <Route path="product/product-order" element={<UserBlankPage />} />
          <Route path="product/delivery-status" element={<UserBlankPage />} />

          <Route path="epin/buy-epin" element={<UserBlankPage />} />
          <Route path="epin/generate-epin" element={<UserBlankPage />} />
          <Route path="epin/used-epin" element={<UserBlankPage />} />
          <Route path="epin/unused-epin" element={<UserBlankPage />} />
          <Route path="epin/list-all-epin" element={<UserBlankPage />} />
          <Route path="epin/transfer-epin" element={<UserBlankPage />} />
          <Route path="epin/epin-transfer-history" element={<UserBlankPage />} />

          <Route path="transactions/main-wallet" element={<UserBlankPage />} />
          <Route path="transactions/transaction-history" element={<TransactionHistory />} />

          <Route path="ticket-support" element={<CreateTicket />} />
          <Route path="news-events" element={<UserBlankPage />} />
          <Route path="log-out" element={<UserSignOut />} />

          <Route path="profile/my-profile" element={<MyProfile />} />
          <Route path="profile/change-password" element={<ChangePassword />} />
          <Route path="profile/update-bank-details" element={<UpdateBankDetails />} />
          <Route path="team/direct-list" element={<DirectList />} />
          <Route path="team/my-tree" element={<UserMyTree />} />
          <Route path="team/my-team" element={<MyTeam />} />
          <Route path="payment/self-payment-history" element={<SelfPaymentHistory />} />
          <Route path="payment/payment-request-history" element={<PaymentRequestHistory />} />
          <Route path="income/level-income" element={<UserLevelIncome />} />
          <Route path="support/create-ticket" element={<CreateTicket />} />
          <Route path="sign-out" element={<UserSignOut />} />

          <Route path="*" element={<Navigate to="/user/dashboard" replace />} />
        </Route>

        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="epin/epin-request" element={<EPinRequest />} />
          <Route path="epin/generate-epin" element={<GenerateEPin />} />
          <Route path="epin/unused-epin" element={<UnusedEPin />} />
          <Route path="epin/used-epin" element={<UsedEPin />} />
          <Route path="epin/all-epin" element={<AllEPin />} />
          <Route path="epin/delete-epin" element={<DeleteEPin />} />
          <Route path="epin/transfer-history" element={<TransferHistory />} />

          <Route path="members/kyc-request" element={<KYCRequest />} />
          <Route path="members/all-members" element={<AllMemberPerformance />} />
          <Route path="members/all-member-performance" element={<AllMemberPerformance />} />
          <Route path="members/active-members" element={<MembersLocation />} />
       

          <Route path="members/all-members-list" element={<AllMembersList />} />

          <Route path="network-reports/network-explorer" element={<NetworkExplorer />} />
          <Route path="network-reports/downline-list" element={<MyDirectReferral />} />
          <Route path="network-reports/level-income-reports" element={<LevelIncome />} />
          <Route path="network-reports/donation-report" element={<Navigate to="/income-reports/donation-report" replace />} />
          <Route path="network-reports/upgrade-reports" element={<Navigate to="/income-reports/donation-report" replace />} />

          <Route path="income-reports/level-income-reports" element={<LevelIncome />} />
          <Route path="income-reports/donation-report" element={<DonationReport />} />

          <Route path="products-package/add-products" element={<AdminBlankPage />} />
          <Route path="products-package/modify-product" element={<AdminBlankPage />} />
          <Route path="products-package/rearrange-products" element={<AdminBlankPage />} />

          <Route path="product-order/new-orders" element={<AdminBlankPage />} />
          <Route path="product-order/pending-orders" element={<AdminBlankPage />} />
          <Route path="product-order/delivered-orders" element={<AdminBlankPage />} />
          <Route path="product-order/rejected-orders" element={<AdminBlankPage />} />
          <Route path="product-order/all-orders" element={<AdminBlankPage />} />

          <Route path="transaction/main-wallet" element={<AdminBlankPage />} />

          <Route path="withdrawals/all-request" element={<AdminBlankPage />} />
          <Route path="withdrawals/approved-request" element={<AdminBlankPage />} />
          <Route path="withdrawals/pending-request" element={<AdminBlankPage />} />
          <Route path="withdrawals/reject-request" element={<AdminBlankPage />} />

          <Route path="settings/level-plan" element={<AdminBlankPage />} />
          <Route path="settings/manage-taxes-deduction" element={<AdminBlankPage />} />

          <Route path="news-popup/add-new" element={<AdminBlankPage />} />
          <Route path="news-popup/list-all" element={<AdminBlankPage />} />

          <Route path="support/support-section" element={<AdminBlankPage />} />
          <Route path="support/support-tickets" element={<TicketHistory />} />
          <Route path="support/chat-integration" element={<AdminBlankPage />} />

          <Route path="last-login-date-time" element={<AdminBlankPage />} />
          <Route path="sign-out" element={<SignOut />} />

          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;