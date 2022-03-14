import requests
import pokebase as pb
import json




print("Enter the ID or name of Pokemon you wish to see :")
pkmn = input()


r = requests.get("https://pokeapi.co/api/v2/pokemon-form/" + str(pkmn) + "/")
data = r.json()
print(data)


pkmn_sprite = pb.SpriteResource('pokemon', pkmn)
print(pkmn_sprite)

    # Wipe clean json for new content
with open("pokedata.json", "r+") as f:
    f.truncate(0)
# Save followers list to file
with open("pokedata.json", "w") as file:
    json.dump(data, file)