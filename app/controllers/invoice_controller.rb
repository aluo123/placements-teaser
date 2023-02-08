class InvoiceController < ApplicationController
  def index
    filter = params[:filter]
    filter_column = params[:filter_column]
    if filter == ""
      invoices = Invoice.all
    else
      invoices = Invoice.where("#{filter_column} like '%#{filter}%'")
    end
    
    invoices = invoices.paginate(:page => params[:page], :per_page => params[:page_size])
    respond_to do |format|
      format.html
      format.json { render json: {
        invoices: invoices,
        page: invoices.current_page,
        pages: invoices.total_pages
      } }
    end
  end

  def update
    invoice = Invoice.find(params[:id])
    invoice.update_attributes(invoice_params)
    respond_to do |format|
      format.html
      format.json { render json: invoice }
    end
  end

  def example
    render plain: JSON.pretty_generate(
      JSON.parse(placements_teaser_data)[0..2]
    )
  end

private

  def invoice_params
    params.require(:invoice).permit(:adjustments)
  end

  def placements_teaser_data
    File.read(
      Rails.root.join(
        'public', 'placements_teaser_data.json',
      )
    )
  end
end
