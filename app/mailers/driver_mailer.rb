class DriverMailer < ApplicationMailer
	default from: 'notifications@example.com'
	def send_notification(driver)
    	@user = user
    	mail(to: user.email)
    end
end
