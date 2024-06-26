import {takeLatest, put, call} from "redux-saga/effects";
import {collectorOrganizeDriveService} from "../../../../services/collector/collectorOrganizeDriveService/collectorOrganizeDriveService";
import {COLLECTOR_ORGANIZE_REQUEST} from "../../../config/actionType";
import {
  collectorOrganizeDriveError,
  collectorOrganizeDriveSuccess,
} from "../../../action/collector/collectorOrganizeDriveAction/collectorOrganizeDriveAction";

export function* collectorOrganizeDriveSaga(data) {
  try {
    let response = yield call(collectorOrganizeDriveService, data);
    yield put(collectorOrganizeDriveSuccess(response));
  } catch (error) {
    yield put(collectorOrganizeDriveError(error));
  }
}

export function* watchCollectorOrganizeDrive() {
  yield takeLatest(COLLECTOR_ORGANIZE_REQUEST, collectorOrganizeDriveSaga);
}
