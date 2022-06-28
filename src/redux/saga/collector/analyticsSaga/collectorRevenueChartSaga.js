import {COLLECTOR_REVENUE_CHART_REQUEST} from "../../../config/actionType";
import {takeLatest, put, call} from "redux-saga/effects";
import {collectorRevenueChartService} from "../../../service/collector/analyticsService/collectorRevenueChartService";
import {
  collectorRevenueChartError,
  collectorRevenueChartSuccess,
} from "../../../action/collector/analyticsAction/collectorRevenueChartAction";

function* collectorRevenueChartSaga() {
  try {
    let response = yield call(collectorRevenueChartService);
    // console.log("saga", response);
    yield put(collectorRevenueChartSuccess(response));
  } catch (error) {
    yield put(collectorRevenueChartError(error));
    ``;
  }
}

export function* watchCollectorRevenueChart() {
  yield takeLatest(COLLECTOR_REVENUE_CHART_REQUEST, collectorRevenueChartSaga);
}
