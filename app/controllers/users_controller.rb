class UsersController < ApplicationController
	skip_before_action :authenticate_user!
	def new_driver
		@driver = User.drivers.new
	end

	def drivers
		if params.has_key?(:drivers)
			@drivers = User.drivers.where(id: params[:drivers])
			@booking_data = JSON.parse(params[:data])
		else
			@drivers = User.drivers
		end
		respond_to do |format|
			format.html
			format.json { render json: @drivers }
		end
	end

	def search_drivers
		@drivers = Location.near(params[:search][:source],5).collect{|u| u.user }
		respond_to do |format|
			format.html
			format.json { render json: { drivers: @drivers.collect(&:id),"redirect":true,"redirect_url": drivers_path }}
		end
	end
end
