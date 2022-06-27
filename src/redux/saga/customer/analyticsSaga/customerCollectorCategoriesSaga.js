import {call, put, takeLatest} from "redux-saga/effects";
import {
  customerCollectorCategoriesError,
  customerCollectorCategoriesSuccess,
} from "../../../action/customer/analyticsAction/customerCollectorCategoriesAction";
import {CUSTOMER_COLLECTORCATEGORIES_REQUEST} from "../../../config/actionType";
import {customerCollectorCategoriesService} from "../../../service/customer/analyticsService/customerCollectorCategoriesService";

function* customerCollectorCategoriesSaga() {
  try {
    let response = yield call(customerCollectorCategoriesService);
    console.log("Saga", response);
    yield put(customerCollectorCategoriesSuccess(response));
  } catch (error) {
    yield put(customerCollectorCategoriesError(error));
  }
}

export function* watchCustomerCollectorCategories() {
  yield takeLatest(
    CUSTOMER_COLLECTORCATEGORIES_REQUEST,
    customerCollectorCategoriesSaga
  );
}
