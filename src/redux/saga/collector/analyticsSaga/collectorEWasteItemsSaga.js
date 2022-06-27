import {call, put, takeLatest} from "redux-saga/effects";
import {COLLECTOR_EWASTE_ITEMS_REQUEST} from "../../../config/actionType";
import {collectorEWasteItemsService} from "../../../service/collector/analyticsService/collectorEWasteItemsService";
import {
  collectorEWasteItemsSuccess,
  collectorEWasteItemsError,
} from "../../../action/collector/analyticsAction/collectorEWasteItemsAction";

function* collectorEWasteItemsSaga() {
  try {
    let response = yield call(collectorEWasteItemsService);
    yield put(collectorEWasteItemsSuccess(response));
  } catch (error) {
    yield put(collectorEWasteItemsError(error));
  }
}

export function* watchCollectorEWasteItems() {
  yield takeLatest(COLLECTOR_EWASTE_ITEMS_REQUEST, collectorEWasteItemsSaga);
}
