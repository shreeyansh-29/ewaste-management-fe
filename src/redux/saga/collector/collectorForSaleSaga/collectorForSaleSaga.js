import {COLLECTOR_FORSALE_REQUEST} from "../../../config/actionType";
import {takeLatest, put, call} from "redux-saga/effects";
import {collectorForSaleService} from "../../../../services/collector/collectorForSaleService/collectorForSaleService";
import {
  collectorForSaleError,
  collectorForSaleSuccess,
} from "../../../action/collector/collectorForSaleAction/collectorForSaleAction";

export function* collectorForSaleSaga(data) {
  try {
    let response = yield call(collectorForSaleService, data);
    yield put(collectorForSaleSuccess(response.data));
  } catch (error) {
    yield put(collectorForSaleError(error));
  }
}

export function* watchCollectorForSale() {
  yield takeLatest(COLLECTOR_FORSALE_REQUEST, collectorForSaleSaga);
}
