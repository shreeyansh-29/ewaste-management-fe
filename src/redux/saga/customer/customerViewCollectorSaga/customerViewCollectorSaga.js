import {takeLatest, put, call} from "redux-saga/effects";
import {
  customerViewCollectorsError,
  customerViewCollectorsSuccess,
} from "../../../action/customer/customerViewCollectorAction/customerViewCollectorAction";
import {CUSTOMER_VIEW_COLLECTORS_REQUEST} from "../../../config/actionType";
import {customerViewCollectorService} from "../../../service/customer/customerViewCollectorService/customerViewCollectorService";

export function* customerViewCollectorsSaga(action) {
  try {
    let response = yield call(customerViewCollectorService, action);
    yield put(customerViewCollectorsSuccess(response));
  } catch (error) {
    yield put(customerViewCollectorsError(error));
  }
}

export function* watchCustomerViewCollectors() {
  yield takeLatest(
    CUSTOMER_VIEW_COLLECTORS_REQUEST,
    customerViewCollectorsSaga
  );
}
