/*
  @module collectorRoutes
*/
import React from "react";
import {Routes, Route} from "react-router-dom";
import CollectorHome from "../../container/collector/collectorHome";
import CollectorNav from "../../container/collector/navbar/collectorNav";
import CollectorProfile from "../../container/collector/profile/collectorProfile";
import OrganizeDrive from "../../container/collector/e-WasteDrives/organizeDrive";
import MyDrives from "../../container/collector/e-WasteDrives/myDrives";
import CollectorRequests from "../../container/collector/collectorsRequests/collectorRequests";
import RequestSummary from "../../container/collector/collectorsRequests/requestSummary";
import ItemsForSale from "../../container/collector/collectorSaleItems/itemsForSale";
import SummarySales from "../../container/collector/collectorSaleItems/availableSales";
import SaleItems from "../../container/collector/collectorSaleItems/salesItems";
import PageNotFound from "../../container/pageNotFound/pageNotFound";
import AuthProtected from "../authProtected/authProtected";

const CollectorRoutes = () => {
  return (
    <Routes>
      <Route path="/CollectorHome" element={<CollectorHome />} />
      <Route path="/CollectorNav" element={<CollectorNav />} />
      <Route path="/CollectorProfile" element={<CollectorProfile />} />
      <Route path="/Drive/OrganizeDrive" element={<OrganizeDrive />} />
      <Route path="/Drive/MyDrives" element={<MyDrives />} />
      <Route
        path="/Request/CollectorRequests"
        element={<CollectorRequests />}
      />
      <Route path="/MyRequests" element={<RequestSummary />} />
      <Route path="/Sales/ItemsForSale" element={<ItemsForSale />} />
      <Route path="/Sales/SummarySales" element={<SummarySales />} />
      <Route path="/Sales/SaleItems" element={<SaleItems />} />
      <Route path="/" element={<AuthProtected />} />
      <Route exact path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default CollectorRoutes;
