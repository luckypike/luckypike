class User < ApplicationRecord
  devise :database_authenticatable, :rememberable

  def remember_me
    true
  end
end
