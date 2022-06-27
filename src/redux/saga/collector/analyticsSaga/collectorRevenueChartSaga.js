function* collectorRevenueChartSaga() {
  try {
  } catch (error) {
    yield put();
  }
}

export function* watchCollectorRevenueChart() {
  yield takeLatest(COLLECTOR_REVENUE_CHART_REQUEST, collectorRevenueChartSaga);
}
