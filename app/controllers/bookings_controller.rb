class BookingsController < ApplicationController
	skip_before_action :authenticate_user!, only: [:search]
	def index
		@bookings = Booking.all
	end

	def search
		@search = User.drivers.search(params[:query])
		if request.xhr?
			render :json => @search.to_json
		else
			render :index
		end
	end
end
