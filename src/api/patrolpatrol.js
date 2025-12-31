import http from '@/utils/http';
function inspection(data) {
  let url = '/api/hz-cockpit/inspection/round/options'
  return http.get(url, data)
}
function unit(data) {
  let url = '/api/hz-cockpit/inspection/unit/options'
  return http.get(url, data)
}
function groupStatistics(data) {
  let url = '/api/hz-cockpit/inspection/group-statistics'
  return http.get(url, data)
}
function talentStatistics(data) {
  let url = '/api/hz-cockpit/inspection/talent/statistics'
  return http.get(url, data)
}

function groupTalentChange(data) {
  let url = '/api/hz-cockpit/inspection/group-talent-change'
  return http.get(url, data)
}
function reportMeasureStatistics(data) {
  let url = '/api/hz-cockpit/inspection/report-measure/statistics'
  return http.get(url, data)
}

  function reportMeasureStatisticsByYearRange(data) {
    let url = '/api/hz-cockpit/test/statistics'
    return http.get(url, data)
  }
  function unitProblemDistribution(data) {
    let url = '/api/hz-cockpit/test/unit-problem/distribution'
    return http.get(url, data)
  }
  function unitProjectStatistics(data) {
    let url = '/api/hz-cockpit/political-supervision/unit-project/statistics'
    return http.get(url, data)
  }
  function projectCategoryStatistics(data) {
    let url = '/api/hz-cockpit/political-supervision/project-category/statistics'
    return http.get(url, data)
  }
  function adviceBookStatistics(data) {
    let url = '/api/hz-cockpit/political-supervision/advice-book/statistics'
    return http.get(url, data)
  }
  function inspectStatistics(data) {
    let url = '/api/hz-cockpit/political-supervision/inspect/statistics'
    return http.get(url, data)
  }
 
  function fourFormUnitStatistics(data) {
    let url = '/api/hz-cockpit/political-supervision/four-form/unit/statistics'
    return http.get(url, data)
  }



export {
  inspection,
  unit,
  groupStatistics,
  talentStatistics,
  groupTalentChange,
  reportMeasureStatistics,
  reportMeasureStatisticsByYearRange,
  unitProblemDistribution,
  unitProjectStatistics,
  projectCategoryStatistics,
  adviceBookStatistics,
  inspectStatistics,
  fourFormUnitStatistics
}