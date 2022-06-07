require "json"

file = File.read("./translator/th-en.json")
input = JSON.parse(file)
puts "input size: #{input.size}"
output = input.invert
puts "output.size: #{output.size}"

invert = output.invert

diff = input.to_a - invert.to_a

raise StandardError, "Invert does not match original, There are duplicate keys." unless diff.empty?

File.open("./translator/en-th.json", "w") do |f|
  f.write(output.to_json)
end

puts "Done"
