import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(`string`),
  email: attr(`string`),
  password: attr(`string`),
  imageUrl: attr(`string`),
  username: attr(`string`),
  likes: hasMany(`like`),
  bots: hasMany(`bot`),

  likeIds: Ember.computed.mapBy('likes', 'id'),
});
