/*
  @module collectorRoutes
*/
import React from "react";
import {Routes, Route} from "react-router-dom";
import CollectorHome from "../../container/collectorContainer/collectorHome";
import CollectorNav from "../../container/collectorContainer/navbar/collectorNav";
import CollectorProfile from "../../container/collectorContainer/profile/collectorProfile";
import OrganizeDrive from "../../container/collectorContainer/e-WasteDrives/organizeDrive";
import MyDrives from "../../container/collectorContainer/e-WasteDrives/myDrives";
import CollectorRequests from "../../container/collectorContainer/collectorsRequests/collectorRequests";
import RequestSummary from "../../container/collectorContainer/collectorsRequests/requestSummary";
import ItemsForSale from "../../container/collectorContainer/collectorSaleItems/itemsForSale";
import SummarySales from "../../container/collectorContainer/collectorSaleItems/availableSales";
import SaleItems from "../../container/collectorContainer/collectorSaleItems/salesItems";
import PageNotFound from "../../components/pageNotFound/pageNotFound";
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
      <Route path="/Request/MyRequests" element={<RequestSummary />} />
      <Route path="/Sales/ItemsForSale" element={<ItemsForSale />} />
      <Route path="/Sales/SummarySales" element={<SummarySales />} />
      <Route path="/Sales/SaleItems" element={<SaleItems />} />
      <Route path="/" element={<AuthProtected />} />
      <Route exact path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default CollectorRoutes;
