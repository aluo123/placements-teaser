const a = {
  id: 1,
  campaign_id: 1,
  campaign_name:
    "Satterfield-Turcotte : Multi-channelled next generation analyzer - e550",
  line_item_name: "Awesome Plastic Car - 6475",
  booked_amount: 430706.6871532752,
  actual_amount: 401966.50504006835,
  adjustments: 1311.0731142230268,
};

const COLUMN_CONFIGS = [
  {
    header: "ID",
    key: "id",
    render: defaultCellRenderer,
  },
  {
    header: "Campaign ID",
    key: "campaign_id",
    render: defaultCellRenderer,
  },
  {
    header: "Campaign Name",
    key: "campaign_name",
    render: defaultCellRenderer,
  },
  {
    header: "Line Item Name",
    key: "line_item_name",
    render: defaultCellRenderer,
  },
  {
    header: "Booked Amount",
    key: "booked_amount",
    render: currencyCellRenderer,
  },
  {
    header: "Actual Amount",
    key: "actual_amount",
    render: currencyCellRenderer,
  },
  {
    header: "Adjustments",
    key: "adjustments",
    render: currencyCellRenderer,
  },
];
