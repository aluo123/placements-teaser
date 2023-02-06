class CreateInvoices < ActiveRecord::Migration[5.1]
  def change
    create_table :invoices do |t|
      t.integer :campaign_id
      t.text :campaign_name
      t.text :line_item_name
      t.decimal :booked_amount
      t.decimal :actual_amount
      t.decimal :adjustments

      t.timestamps
    end
  end
end
