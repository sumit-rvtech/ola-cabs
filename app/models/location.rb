class Location < ApplicationRecord
	belongs_to :user

	geocoded_by :address, :latitude  => :lat, :longitude => :long
	after_validation :reverse_geocode

	scope :latest, lambda { where("created_at > ?", Time.now - 5.minutes) }

	before_save :save_lat_long


	def save_lat_long
		a=Geocoder.search(self.address).first
		self.lat = a.latitude
		self.long = a.longitude
	end
end
