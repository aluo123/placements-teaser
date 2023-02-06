# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Invoice.destroy_all

all_invoices = JSON.parse(File.read(Rails.root.join('public/placements_teaser_data.json')))
all_invoices.each do |invoice|
  Invoice.create!(
    id: invoice['id'],
    campaign_id: invoice['campaign_id'],
    campaign_name: invoice['campaign_name'],
    line_item_name: invoice['line_item_name'],
    booked_amount: invoice['booked_amount'],
    actual_amount: invoice['actual_amount'],
    adjustments: invoice['adjustments'],
  )
end

p "Created #{Invoice.count}"