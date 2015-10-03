json.array!(@places) do |place|
  json.extract! place, :id, :name, :tel, :longitude, :latitude
  json.url place_url(place, format: :json)
end
