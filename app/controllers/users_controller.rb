class UsersController < ApplicationController
	skip_before_action :authenticate_user!
	def new_driver
		@driver = User.drivers.new
	end

	def drivers
		@drivers = User.drivers
	end
end
