const ID_COLUMN = {
  header: "ID",
  key: "id",
  render: defaultCellRenderer,
};
const CAMPAIGN_ID_COLUMN = {
  header: "Campaign ID",
  key: "campaign_id",
  render: defaultCellRenderer,
};
const CAMPAIGN_NAME_COLUMN = {
  header: "Campaign Name",
  key: "campaign_name",
  render: defaultCellRenderer,
};
const LINE_ITEM_COLUMN = {
  header: "Line Item Name",
  key: "line_item_name",
  render: defaultCellRenderer,
};
const BOOKED_AMOUNT_COLUMN = {
  header: "Booked Amount",
  key: "booked_amount",
  render: currencyCellRenderer,
};
const ACTUAL_AMOUNT_COLUMN = {
  header: "Actual Amount",
  key: "actual_amount",
  render: currencyCellRenderer,
};
const ADJUSTMENTS_COLUMN = {
  header: "Adjustments",
  key: "adjustments",
  render: adjustmentsRenderer,
};

const FILTER_COLUMNS = [
  ID_COLUMN,
  CAMPAIGN_ID_COLUMN,
  CAMPAIGN_NAME_COLUMN,
  LINE_ITEM_COLUMN,
];

const COLUMN_CONFIGS = [
  ID_COLUMN,
  CAMPAIGN_ID_COLUMN,
  CAMPAIGN_NAME_COLUMN,
  LINE_ITEM_COLUMN,
  BOOKED_AMOUNT_COLUMN,
  ACTUAL_AMOUNT_COLUMN,
  ADJUSTMENTS_COLUMN,
];
