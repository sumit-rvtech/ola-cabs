class User < ApplicationRecord
	enum role: [:customer, :driver, :admin]
	after_initialize :set_default_role, :if => :new_record?

	def set_default_role
		self.role ||= :customer
	end

	scope :drivers, lambda { where(:role => "driver") }

	# Include default devise modules. Others available are:
	# :confirmable, :lockable, :timeoutable and :omniauthable
	devise :database_authenticatable, :registerable,
	     :recoverable, :rememberable, :trackable, :validatable

	validates_presence_of :first_name, :last_name
	validates_presence_of :mobile, :unless => :admin?
	validates_presence_of :vehicle_number, :cab_type, :if => :driver?
	validates_uniqueness_of :vehicle_number, :mobile
	has_many :locations
end
