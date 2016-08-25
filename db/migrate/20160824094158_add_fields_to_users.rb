class AddFieldsToUsers < ActiveRecord::Migration[5.0]
  def change
  	add_column :users, :role, :integer
  	add_column :users, :first_name, :string
  	add_column :users, :last_name, :string
  	add_column :users, :address, :string
  	add_column :users, :cab_type, :string
  	add_column :users, :vehicle_number, :string
  	add_column :users, :mobile, :integer
  end
end