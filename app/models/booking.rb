class Booking < ApplicationRecord
	geocoded_by :source, :latitude  => :latitude, :longitude => :longitude
	after_validation :reverse_geocode
end
