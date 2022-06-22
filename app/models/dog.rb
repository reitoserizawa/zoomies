class Dog < ApplicationRecord
  belongs_to :user
  has_many :check_ins

  validates :name, presence: true
  validates :breed, presence: true
  validates :size, inclusion: { in: %w(Small Medium Large),
    message: "Choose a valid size dog" }
  validates :img, presence: true
  validates :user_id, presence: true

end
