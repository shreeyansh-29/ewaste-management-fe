import React from "react";
import {Routes, Route} from "react-router-dom";
import CollectorHome from "../../container/collector/collectorHome";
import CollectorNav from "../../container/collector/navbar/collectorNav";
import CollectorProfile from "../../container/collector/profile/collectorProfile";
import OrganizeDrive from "../../container/collector/e-Waste Drives/organizeDrive";
import MyDrives from "../../container/collector/e-Waste Drives/myDrives";
import CollectorRequests from "../../container/collector/collectorsRequests/collectorRequests";
import RequestSummary from "../../container/collector/collectorsRequests/requestSummary";
import ItemsForSale from "../../container/collector/collectorSaleItems/itemsForSale";
import SummarySales from "../../container/collector/collectorSaleItems/availableSales";
import SaleItems from "../../container/collector/collectorSaleItems/salesItems";

const collectorPrivateRoutes = () => {
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
    </Routes>
  );
};

export default collectorPrivateRoutes;
