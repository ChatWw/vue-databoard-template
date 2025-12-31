import http from '@/utils/http';

function appealAccept(data) {
  let url = '/api/hz-cockpit/appeal-monitor/petition/accept/situation'
  return http.get(url, data)
}

function appealClue(data) {
  let url = '/api/hz-cockpit/appeal-monitor/petition/clue/situation'
  return http.get(url, data)
}

function caseHandle(data) {
  let url = '/api/hz-cockpit/appeal-monitor/petition/case-handle/situation'
  return http.get(url, data)
}

function moniStats(data) {
  let url = '/api/hz-cockpit/appeal-monitor/stats'
  return http.get(url, data)
}

function newsAdopt(data) {
  let url = '/api/hz-cockpit/appeal-monitor/news-adopt/situation'
  return http.get(url, data)
}

function integrityCulture(data) {
  let url = '/api/hz-cockpit/appeal-monitor/integrity-culture/works'
  return http.get(url, data)
}

function riskWarning(data) {
  let url = '/api/hz-cockpit/appeal-monitor/risk-warning/month-stat'
  return http.get(url, data)
} 

function adoptDetails(data) {
  let url = '/api/hz-cockpit/appeal-monitor/news-adopt/details'
  return http.get(url, data)
}  

export {
  appealAccept,
  appealClue,
  caseHandle,
  moniStats,
  newsAdopt,
  adoptDetails,
  integrityCulture,
  riskWarning
}