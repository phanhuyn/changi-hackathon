json.array!(@gates) do |gate|
  json.extract! gate, :id, :name, :longitude, :latitude
  json.url gate_url(gate, format: :json)
end
