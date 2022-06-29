import {takeLatest, put, call} from "redux-saga/effects";
import {collectorOrganizeDriveService} from "../../../service/collector/collectorOrganizeDriveService/collectorOrganizeDriveService";
import {COLLECTOR_ORGANIZE_REQUEST} from "../../../config/actionType";
import {
  collectorOrganizeDriveError,
  collectorOrganizeDriveSuccess,
} from "../../../action/collector/collectorOrganizeDriveAction/collectorOrganizeDriveAction";

function* collectorOrganizeDriveSaga(data) {
  try {
    let response = yield call(collectorOrganizeDriveService, data);
    console.log(response);
    response = yield response.json();
    yield put(collectorOrganizeDriveSuccess(response.data));
  } catch (error) {
    yield put(collectorOrganizeDriveError(error));
  }
}

export function* watchCollectorOrganizeDrive() {
  yield takeLatest(COLLECTOR_ORGANIZE_REQUEST, collectorOrganizeDriveSaga);
}
