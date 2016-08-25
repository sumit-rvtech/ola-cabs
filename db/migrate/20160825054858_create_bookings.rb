class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.string :source
      t.string :destination
      t.decimal :distance
      t.decimal :price
      t.integer :status

      t.timestamps
    end
  end
end
